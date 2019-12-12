import React from 'react';

const listTodoItems = [];
const doneTodoItems = [];

function ListTodoWoking (props) {
  if(props.items){
    return (
      <ul className="list-group">
        {props.items.map((item, index) => (
            <div className="border px-2 py-1 mt-2" key={index}>
              <i className="fa fa-check mr-2 btn" aria-hidden="true" onClick={()=>props.doneItem(parseInt(index))}></i>
              {item.work} 
              <i onClick={()=>props.removeItems(parseInt(index))} className="fas fa-trash float-right btn"></i>
            </div>
          ))}
      </ul>
    )
  } 
}

function ListDoneTodoWoking (props) {
  if(props.doneWork){
    return (
      <div>
        <h4 className="text-center mb-0 py-1">list done</h4>
        <ul className="list-group">
          {props.doneWork.map((item, index) => (
              <div className="border px-2 py-1 mt-2 alert alert-success"   key={index}>
                <i className="fa fa-undo mr-2 btn" aria-hidden="true" onClick={()=>props.undoItems(parseInt(index))}></i>
                {item.work} 
              </div>
            ))}
        </ul>
      </div>
    )
  }
}

class AddItemTodo extends React.Component 
{
  constructor(props) {
    super(props);
    this.changeItems = this.changeItems.bind(this);
    this.submitAddItems = this.submitAddItems.bind(this);
    this.state = { items: listTodoItems, doneWork: doneTodoItems, work: '' };
  }

  changeItems(e) {
    if(e.target.value.length > 0) {
      this.setState({ work: e.target.value });
    }
  }

  submitAddItems(e) {
    e.preventDefault(); // ngan chan cac su kien mac dinh cua trinh duyet
    if(this.state.work.length > 0){
      const newItem = {
        index: this.state.items.length+1,
        work: this.state.work,
        done: false
      };
      this.setState(state => ({
        items: [...state.items, newItem], // lay ca state cu va sate moi de tra ve tat ca du lieu
        work: ''
      }));
    }
  }

  removeItems(index) {
    this.state.items.splice(index, 1); // xoa phan tu
    this.setState(state => ({
      items: state.items, // xet lai dung state vua bi xoa - khong phai la lay lai ca state cu nhu phan them
      work: ''
    }));
  }

  doneStatusWork(index) {
    let todo = this.state.items[index];
    this.state.items.splice(index, 1);   
    todo.done = !todo.done;

    this.setState({items: this.state.items}); 
    this.setState({doneWork: [...this.state.doneWork, todo]});  
     
  }

  undoTotoWork(index) {

    let todo = this.state.doneWork[index];
    this.state.doneWork.splice(index, 1);   
    todo.done = !todo.done;

    
    this.setState({doneWork: this.state.doneWork});  
    this.setState({items: [...this.state.items, todo]});  
  }

  render() {
    return(
      <div className="row mt-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <form onSubmit={this.submitAddItems}>
            <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control" 
                value={this.state.work}
                onChange={this.changeItems}
              />
              <div className="input-group-append">
                <button className="input-group-text btn btn-primary">Addd</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <ListTodoWoking 
            items={this.state.items}
            removeItems={(index)=> this.removeItems(index)}
            doneItem={(index)=>this.doneStatusWork(index)} 
          />
          <ListDoneTodoWoking
            doneWork={this.state.doneWork}
            undoItems={(index)=>this.undoTotoWork(index)}
          />
        </div>
      </div>
    );
  }
}

export default AddItemTodo;