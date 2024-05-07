# Comment Functionality Workshop Project

## Introduction
This workshop project aims to add comment functionality to a MERN (MongoDB, Express.js, React.js, Node.js) stack project. By the end of this workshop, participants will be able to create a comment model, implement CRUD operations for comments, and integrate comment functionality into the frontend interface.

## To-Do List

### Todo:
  ☐ Create comment model
    ☐ Comment model should have ref to the User who created it and the Issue it was made on
  
  ☐ Create comment router
    ☐ Get all request vs Get by Issue id request
    ☐ We need to manage both references in the post route
    ☐ Test in Postman

  ☐ Front end implementation 
    ☐ Axios request to get comments
    ☐ Putting the comments on the page
    ☐ How do we handle having just the comments for that issue display vs all comments
    ☐ Axios request to post new comments
    ☐ Implement that request on the form

## Getting Started
To begin with the project, follow these steps:

1. Clone the project repository to your local machine by running the following command in your terminal:
   ```bash
   git clone https://github.com/VSchool/rtv-comments-workshop.git
   ```

2. Navigate into the project directory:
   ```bash
   cd rtv-comments-workshop
   ```

3. Remove the `.git` directory to detach from the original repository:
   ```bash
   rm -rf .git
   ```

4. Set up your MERN stack environment with MongoDB, Express.js, React.js, and Node.js.
5. Create a new MongoDB database for your project.
6. Implement the comment model in your backend application.
7. Set up the comment router with appropriate endpoints.
8. Develop the frontend interface to display and post comments using React.js.
9. Test your implementation thoroughly to ensure proper functionality.

## Conclusion
By completing this workshop project, participants will have gained hands-on experience in implementing comment functionality in a MERN stack application. They will have learned how to create models, routers, and frontend components to enable users to interact with comments effectively.# rtv-comments-workshop
