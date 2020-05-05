import './styles/style.scss';
import 'angular';


angular
  .module('todoList', [])
  .controller('formController', function formController() {
    this.tasks = ['test'];
    this.newTask = '';
    this.test = 'testac'
    console.log(this.test);

    this.submit = () => {
      this.tasks.push(this.newTask);
    };

    this.delete = (index) => {
      this.tasks.splice(index, 1);
    }
  });
