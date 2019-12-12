import React from 'react';
import Header from './components/todo/Header';
import Footer from './components/todo/Footer';
import AddTodo from './components/todo/AddItems';

class TotoList extends React.Component
{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container border mt-3">
        <Header />
        <AddTodo />
        <Footer />
      </div>
    );
  }
}



export default TotoList;