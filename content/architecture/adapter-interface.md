---
title: "Adapter Interfaces"
metaTitle: "Adapter Interfaces"
metaDescription: "Adapter Interfaces"
---

The adapter interfaces allow any deployer to implement logic to connect to the backend of their choice. Adapter interfaces Each adapter implements methods that correspond to the APIs made available by the middleware.

### Below is an example of the Attendance Adapter Interface

```typescript

interface IAttendance {
    schoolId: string;
    userId: string;
    groupId: string;
    topicId: string;
    eventId: string;
    date: datetime;
    attendance: string;
    remark: string;
    approved: string;
    approvedBy: string;
}


interface IAttendanceAdapter {
    create(IAttendance): IAttendance;
    read(id): IAttendance;
    list(filters): IAttendance[];
}
```

The deployer will implement the interface, and write code within to 
1. Fetch data from their data source (could API, DB or any other source)
2. Transform the data to the specific interface's properties, and return the transformed data

### Below is an example implementation of the above interface

```typescript
class SBRCAttendance implements IAttendanceAdapter { 

    constructor(TBD) { 
    }

    create (IAttendance) { 
      // API call to create attendance record in deployer DB
      // Transform created record to IAttendance
      // return IAttendance
    }

    read(id) { 
      // API call to fetch attendance record from deployer DB
      // Transform record data to IAttendance
      // return IAttendance
    }

    list (filters) { 
      // API call to fetch list of attendance records from deployer DB
      // Transform created record to array of IAttendance
      // return IAttendance[]
    }
}
```