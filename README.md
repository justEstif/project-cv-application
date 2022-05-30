# Table of Contents

1.  [CV-Project](#orgcdfa178)
    1.  [Steps](#orgad94e99)

<a id="orgcdfa178"></a>

# CV-Project

<a id="orgad94e99"></a>

## Steps

1.  [x] create new project using `npx create-react-app cv-project`
2.  [x] remove boilerplate code
3.  [x] think about how to structure your application using class components
    - it should include <code>[0/3]</code>
      - [x] a section to add general information like name, email, phone number
      - [x] a section to add educational experience(school name, title of study, date of study)
      - [x] a section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
    - [ ] make sure to include an edit and submit button for each section or for the whole CV, your preference
      - [ ] submit button should submit your form and display the value of your input fields in HTML elements
      - [ ] the edit button should add back(display) the input fields, with the previously displayed information as values.
4.  [x] Create a components folder in your `src` dir and add your components
5.  [x] Include a styles folder in your `src` dir for your CSS files. You'll need to import there component files to use them
6.  [x] Don't forget to push your solution to GitHub.

## Notes

- There needs to be form validation, or should I used HTML native form validation?
- There needs to be a library for unique id
- We need an object in the App state that is passed to the Form component, that is replaced on submit
  - should each field-set be in a separate field-set?
    - i have to separate the field-sets and then call the components if the user we requires
      - if the user has went to multiple work places, or schools
    - it can have an edit on each field-set
    - we can pass the have the state have different parts that will get passed to the proper component
- The View mode and the edit mode:
  1. switch using css classes
  - on submit, change the class of the Form and Overview
  2. switch by re-rendering components

## Final Notes

- I dived in to the use of state and props in this project. I started by only using Form component, but I realized that I would have to find a way to share the changes to Overview as well.
  - In order to do this, I learned that I had to raise the state,( which is similar to raising the abstraction one more level so that methods could work)
  - Once I achieved this, I decided to separate the field-sets into their own components.
- Although the UI is lacking, I have completed all the requirements for this project.
