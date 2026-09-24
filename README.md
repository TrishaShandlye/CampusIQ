# CampusIQ

## College Academic Resource & Query Platform

CampusIQ is a centralized academic resource and query platform designed to help college students quickly find subject-specific notes, previous year questions, important questions, and other academic resources in one place.

The platform reduces the problem of scattered academic resources across WhatsApp groups, emails, cloud drives, and different platforms by providing a single, organized and searchable system for students and teachers.

---

## Problem Statement

College students often need quick access to academic resources such as notes, previous year questions, important questions, and study material. However, these resources are usually distributed across multiple platforms and communication channels.

This creates several problems:

- Students spend unnecessary time searching for resources.
- Important notes and question papers can get lost in chats.
- Students may miss recently shared academic material.
- Teachers repeatedly share the same resources with different student groups.
- There is no centralized system for organizing college-specific academic resources.

CampusIQ addresses these challenges by providing a centralized platform for academic resource discovery and management.

---

## Objectives

The main objectives of CampusIQ are:

- Provide a centralized academic resource platform.
- Allow students to search resources by subject and topic.
- Provide notes, previous year questions and important questions.
- Allow teachers to upload and manage academic resources.
- Keep academic resources organized and easily accessible.
- Provide role-based access for students and teachers.
- Store resources using a database-driven backend.
- Provide a simple and efficient user experience.

---

## Features

### Student Features

- Student login
- Student dashboard
- Search academic resources
- Search by subject or topic
- Filter resources by category
- Access notes
- Access previous year questions
- Access important questions
- View recently added resources
- Save useful resources
- Logout functionality

### Teacher Features

- Teacher login
- Teacher dashboard
- Upload academic resources
- Add resource details
- Organize resources by subject and category
- Update academic resources
- Manage uploaded resources
- Make newly uploaded resources available to students

### Resource Management

CampusIQ supports multiple types of academic resources:

- Notes
- Previous Year Questions
- Important Questions
- Study Materials

Resources are organized using relevant information such as subject, title, category and upload details.

---

## Technology Stack

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

---

## System Architecture

```text
                    CampusIQ
                       |
          +------------+------------+
          |                         |
       Student                   Teacher
          |                         |
          v                         v
   Student Dashboard         Teacher Dashboard
          |                         |
          |                         |
          +-----------+-------------+

                      |
                      v
                  MongoDB
                      |
                      v
             Academic Resources
