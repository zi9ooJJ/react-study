todos = ["1", "2", "3", "4", "5"];

function map(todos, callback) {
  let index = 0;

  for (let todo of todos) {
    callback(todo, index); // console.log(todo);
    index++;
  }
}

map(todos, (t, index) => console.log(t, index));

// const a = () => () => () => console.log(1);

// a;

// a(); // () => () => console.log(1)()

// a()(); // () => console.log(1)()

// a()()(); // console.log(1)
