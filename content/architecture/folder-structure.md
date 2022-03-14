---
title: "Middleware Folder Structure"
metaTitle: "Middleware Folder Structure"
metaDescription: "Middleware Folder Structure"
---




Below is the folder structure of the middleware application. The deployer needs to create a new sub-folder in the `adapters` folder. Within this folder, there is one adapter for each entity - student, attendance and all the others.

```shell
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

### Data Model Interfaces

```typescript
interface IAttendance {
    id : string
    schoolId : string
    userId : string
    groupId : string
    topicId : string
    eventId : string
    date : datetime
    attendance : string
    remark : string
    approved : string
    approvedBy : string
    lat : double
    long : double
    image : string
}
```

### Adapter Interfaces

```typescript
interface IAttendanceAdapter {
    get() : APIException or IAttendance
    post() : APIException or IAttendance
    put() : APIException or IAttendance
    find() : APIException or IAttendance[]
}

interface IStudentAdapter {
    get() : APIException or IStudent
    post() : APIException or IStudent
    put() : APIException or IStudent
    find() : APIException or IStudent[]

}
```