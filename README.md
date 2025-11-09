# 0x04. TypeScript

## 📘 Description

This project introduces **TypeScript**, a typed superset of JavaScript that brings static type checking and powerful features for building scalable web applications.  
You will learn how to define **interfaces**, **classes**, **functions**, **namespaces**, and **types** while integrating TypeScript with modern JavaScript tools such as **Webpack** and **Jest**.

---

## 🎯 Learning Objectives

By the end of this project, you should be able to:

- Explain basic types in TypeScript
- Work with **Interfaces**, **Classes**, and **Functions**
- Manipulate the **DOM** using TypeScript
- Use **Generic types** effectively
- Organize code with **Namespaces**
- Merge declarations and use ambient namespaces
- Import external libraries using type declarations
- Apply **Nominal typing** with TypeScript

---

## 🧠 Requirements

- **Editors allowed:** `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files must end with a **new line**
- All your code will be transpiled and checked on **Ubuntu 18.04 LTS**
- TypeScript scripts will be tested using **Jest (v24.9.\*)**
- A `README.md` file at the root of the folder is **mandatory**
- Your code must use the **`.ts`** extension
- The **TypeScript compiler** must not display warnings or errors

---

## ⚙️ Project Structure

Each directory contains its own:

- `package.json`
- `tsconfig.json`
- `webpack.config.js`
- `.eslintrc.js` (when required)
- `js/main.ts` or other `.ts` source files

---

## 📂 Tasks Overview

### **0. Creating an interface for a student**

- Define an interface `Student` with:
  - `firstName`, `lastName`, `age`, `location`
- Create two students and store them in an array `studentsList`
- Render a table displaying **firstName** and **location**
- All variables must use TypeScript
- Webpack must compile with no errors

📁 **Files:**  
`task_0/js/main.ts`, `task_0/package.json`, `task_0/tsconfig.json`, `.eslintrc.js`, `webpack.config.js`

---

### **1. Let’s build a Teacher interface**

- Create a `Teacher` interface with:
  - `firstName`, `lastName` (readonly)
  - `fullTimeEmployee` (required)
  - `yearsOfExperience` (optional)
  - `location` (required)
  - Allow arbitrary extra properties (e.g., `contract: boolean`)

📁 **Files:**  
`task_1/js/main.ts`, `task_1/package.json`, `task_1/tsconfig.json`, `task_1/webpack.config.js`

---

### **2. Extending the Teacher interface**

- Create a new interface `Directors` extending `Teacher`
- Add `numberOfReports: number`

📁 **Files:**  
`task_1/js/main.ts`

---

### **3. Printing teachers**

- Create a function `printTeacher(firstName, lastName)` returning `J. Doe`
- Define an interface `printTeacherFunction` for the function

📁 **Files:**  
`task_1/js/main.ts`

---

### **4. Writing a class**

- Define an interface describing a `Student` constructor
- Implement a `StudentClass` with:
  - `workOnHomework()` → “Currently working”
  - `displayName()` → returns `firstName`

📁 **Files:**  
`task_1/js/main.ts`

---

### **5. Advanced types Part 1**

- Define interfaces:
  - `DirectorInterface` → `workFromHome()`, `getCoffeeBreak()`, `workDirectorTasks()`
  - `TeacherInterface` → `workFromHome()`, `getCoffeeBreak()`, `workTeacherTasks()`
- Create classes `Director` and `Teacher` implementing these interfaces
- Create function `createEmployee(salary)`:
  - Returns a `Teacher` if salary < 500 (and number)
  - Returns a `Director` otherwise

📁 **Files:**  
`task_2/js/main.ts`, `task_2/package.json`, `task_2/tsconfig.json`, `task_2/webpack.config.js`

---

### **6. Creating functions specific to employees**

- Define `isDirector(employee)` as a **type predicate**
- Define `executeWork(employee)`:
  - Calls `workDirectorTasks()` if Director
  - Calls `workTeacherTasks()` if Teacher

📁 **Files:**  
`task_2/js/main.ts`

---

### **7. String literal types**

- Define a string literal type `Subjects = "Math" | "History"`
- Implement `teachClass(todayClass)`:
  - `"Math"` → `Teaching Math`
  - `"History"` → `Teaching History`

📁 **Files:**  
`task_2/js/main.ts`

---

### **8. Ambient Namespaces**

- Create:
  - `interface.ts` → defines `RowID` (number) and `RowElement` (interface)
  - `crud.d.ts` → ambient declaration for CRUD functions
- In `main.ts`:
  - Use `CRUD` functions: `insertRow`, `updateRow`, `deleteRow`
  - Use `RowElement` and `RowID` types

📁 **Files:**  
`task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`

---

### **9. Namespace & Declaration Merging**

- Create namespace `Subjects` with:
  - `Teacher.ts` → `Teacher` interface
  - `Subject.ts` → `Subject` class with `teacher` property and setter
  - `Cpp.ts`, `Java.ts`, `React.ts` → specific subjects extending `Subject`
  - Each has `getRequirements()` and `getAvailableTeacher()`

📁 **Files:**  
`task_4/js/subjects/*.ts`, `task_4/package.json`, `task_4/tsconfig.json`

---

### **10. Update main.ts**

- Import and instantiate `Cpp`, `Java`, and `React`
- Create `cTeacher` with `experienceTeachingC = 10`
- Display requirements and availability for each subject

📁 **Files:**  
`task_4/js/main.ts`

---

### **11. Brand convention & Nominal typing**

- Create interfaces:
  - `MajorCredits` and `MinorCredits` (each with `credits` and a unique brand)
- Functions:
  - `sumMajorCredits(subject1, subject2)`
  - `sumMinorCredits(subject1, subject2)`

📁 **Files:**  
`task_5/js/main.ts`, `task_5/package.json`, `task_5/webpack.config.js`, `task_5/tsconfig.json`

---

## 🧪 Build and Run

### Install Dependencies

```bash
npm install
```
