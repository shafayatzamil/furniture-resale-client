import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="flex my-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold ">
            What are the different ways to manage a state in a React
            application?
          </h2>
        </div>
        <div className="flex-1">
          <p>
            There are four main types of state you need to properly manage in
            your React apps:
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </p>
        </div>
      </div>

      <div className="flex my-4">
        <div className="flex-1">
          {" "}
          <h2 className="text-2xl font-bold ">
            How does prototypical inheritance work?
          </h2>
        </div>
        <div className="flex-1">
          <p>
            Every object in JavaScript has a built-in property, which is called
            its prototype. The prototype is itself an object, so the prototype
            will have its own prototype, making what's called a prototype chain.
            The chain ends when we reach a prototype that has null for its own
            prototype.
          </p>
        </div>
      </div>

      <div className="flex my-4">
        <div className="flex-1">
          {" "}
          <h2 className="text-2xl font-bold ">
            {" "}
            What is a unit test? Why should we write unit tests?
          </h2>{" "}
        </div>
        <div className="flex-1">
          <p>
            Unit Testing is a type of software testing where individual units or
            components of a software are tested. The purpose is to validate that
            each unit of the software code performs as expected. Unit Testing is
            done during the development (coding phase) of an application by the
            developers. Unit Tests isolate a section of code and verify its
            correctness. A unit may be an individual function, method,
            procedure, module, or object.
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1">
          {" "}
          <h2 className="text-2xl font-bold">
            React vs. Angular vs. Vue?
          </h2>{" "}
        </div>
        <div className="flex-1">
          <p className="my-4">
            <h2 className="text-xl font-semibold">Angular</h2>
            Angular has a steep learning curve, considering it is a complete
            solution, and mastering Angular requires you to learn associated
            concepts like TypeScript and MVC. Even though it takes time to learn
            Angular, the investment pays dividends in terms of understanding how
            the front end works.
          </p>
          <p className="my-4">
            <h2 className="text-xl font-semibold">React</h2>
            React offers a Getting Started guide that should help one set up
            React in about an hour. The documentation is thorough and complete,
            with solutions to common issues already present on Stack Overflow.
            React is not a complete framework and advanced features require the
            use of third-party libraries. This makes the learning curve of the
            core framework not so steep but depends on the path you take with
            additional functionality. However, learning to use React does not
            necessarily mean that you are using the best practices.
          </p>
          <p className="my-4">
            <h2 className="text-xl font-semibold">Vue</h2>
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. Hence, the transition to Vue from either of the two is
            an easy option. However, simplicity and flexibility of Vue is a
            double-edged sword — it allows poor code, making it difficult to
            debug and test.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
