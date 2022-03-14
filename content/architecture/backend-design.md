---
title: "Backend Design"
metaTitle: "Shiksha Backend Design"
metaDescription: "Shiksha Backend Design"
---

The Shiksha backend is a suite of REST APIs implemented using nodejs. The backend APIs conform to the schemas defined as part of the Shiksha Ecosystem. While the request and response of the APIs is pre-defined, deployers can use "adapters" to connect these APIs to their existing data sources which may be either databases or another application that provides APIs.

The image below demonstrates how an adopter may write an attendance adapter.

![Shiksha Backend](images/shiksha-backend-adapter.svg)

## Authentication
The Shiksha backend will not provide any authentication. Instead, deployers implement an OpenID compliant authentication service, which will be used by the frontend. Once the user is logged into the frontend, the token received from the authentication service is passed to all the middleware API requests. The middleware passes on the token to the adapter, which can further pass it on to the backend for validation.

## Database
Shiksha does not have any database of its own for the APIs. Instead, the Shiksha APIs are just stubs, and deployers are expected to implement adapters that will fetch data from the deployer's backend and transform it to the data models defined in Shiksha.

## Adapter Design
The below is the folder structure of the backend app
```
/apis
/apis/studentApis.ts
/apis/teacherApis.ts
/apis/attendanceApis.ts
..
..

/interfaces
/interfaces/entities/IStudent.ts
/interfaces/entities/ITeacher.ts
/interfaces/entities/IAttendance.ts
/interfaces/adapter/IStudentAdapter.ts
/interfaces/adapter/ITeacherAdapter.ts
/interfaces/adapter/IAttendanceAdapter.ts
..
..

/exceptions
/exceptions/ValidationException.ts
/exceptions/GeneralException.ts
..
..

/adapters/
/adapters/default
/adapters/default/studentAdapter.ts
/adapters/default/teacherAdapter.ts
/adapters/default/attendanceAdapter.ts
```