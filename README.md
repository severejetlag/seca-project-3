# seca-project-3
## NYC User Database Management System
[GitHub Dashboard](https://fast-bastion-29101.herokuapp.com/)

### What is it?
The city of New York needs a way to manage the users of its Database system. This is a monolithic Spring Boot application with a React front end that allows them to do just that. It allows for users to register accounts along with admin users to delete unnecessary accounts. Users can update their profiles at any time or delete them as well.

### Technologies
* Java
* Spring Boot
* React


### Before Running Or Testing
Before you run the application for the first time, you may want to enter the 'ui' directory and run 'npm install', since the node_modules folder is excluded form upload.

```bash
cd ui
npm install
```
Set in .bash_profile
* GITHUB_CLIENT_ID
* GITHUB_CLIENT_SECRET

### Problems and Future repoLanguages

* Currently the biggest issue I have is an unreliable login where I will have to drop users (and logs) from the DB to allow it to login again. (p0)
* I would also like to add some sort of scheduling to allow for data to be updated at all times and not just on login
