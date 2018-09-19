class MyClass {
  sayHello() {
    console.log('MyClass sayHello called');
  }
}

// Tree Shaking will NOT work
module.exports = MyClass;

// Tree Shaking will work
// export default MyClass;
