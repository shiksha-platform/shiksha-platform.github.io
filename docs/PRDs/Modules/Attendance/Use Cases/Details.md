# Details

## A. Updating attendance for other entities


### 1. Add Attendance

As a teacher, I select a class / period. I mark attendance for the students belonging to the class / period for a particular time period and save it so that I can record the presence / absence of my students at a regular frequency.

#### User Stories

a. User clicks on ‘My Classes’ on the home screen and then selects the allocated group / sub-group (eg: class / period) in which the entities are to be marked and clicks on attendance register (Wireframes - Link 1, Link 2, Link 3)

b. User clicks on the arrow to view previous or next days (Wireframes - Link - Previous Day, Link - Next Day)

c. User clicks on the tab with class name and views the overall details of the class (Wireframes - Link 1, Link 2)

d. User clicks on the arrow against each student to view or edit the details. If the teacher clicks on 'See More', a detailed view of Student Details appears (Wireframes - Link 1, Link 2, Link 3)

e. User views a list of entities with their details in a particular order (eg: alphabetically) for whom attendance is to be updated. If the user clicks on the arrow against each entity, the user gets a pop-up with some student details. If the user clicks on the 'pen' icon, the user can edit the details for the selected entity (Wireframes - Link 1, Link 2, Link 3)

f. User views the past attendance of each entity while marking attendance, horizontally scrollable till a particular period (Wireframes - Link 1, Link 2)

g. On the screen, user should be able to one-click mark attendance for all entities (Wireframe- Link)

h. User updates the status of the entity by tapping on the circles (eg: Present / Absent) for the enabled time period or slot at a particular frequency (eg: twice a day), When the user taps, a list of states appears to choose from (Wireframe - Link)

i. User can also search the name of the student in the attendance register to update attendance for particular entities (Wireframe - Link)

j. After marking attendance for some / all entities, the user clicks on ‘Done' to save the marked attendance (Wireframe - Link)
Marked attendance will be submitted automatically at the set time

#### Corner cases

a. Other teachers in a school can mark and edit attendance for other groups /  classes / periods that they are not allocated for a particular day / slot. 

b. They click on 'Mark Attendance' on classes screen and choose the class. This is only possible if the class teacher has not marked the attendance for her class on that particular day. The teacher can rename attendance & also select the class / group whose attendance needs to be marked (Wireframes - Link 1, Link 2, Link 3, Link 4, Link 5, Link 6, Link 7)

c. Users can also see who updated the attendance last and when if attendance for the selected group before the enabled time slot has already been marked - If the user clicks on 'Check & Mark again', the same attendance will be edited. If the user clicks on 'Create a New Attendance',  attendance for another time slot / shift will be taken (Wireframes - Link 1, Link - Check & Mark Again, Link - Create a new attendance) 

d. In case there is a missing detail for a particular entity, it should appear as 'Not entered' in the student list / attendance register

e. If there is no past attendance, the horizontal scroll is disabled

f. If the attendance is not complete till cutoff time, incomplete attendance should be submitted with unmarked students labelled as ‘Not Marked’ for that date

#### Admin functionality (configs)

a. State Admin - Can configure the student data

b. School Admin (w State Admin approval) - Can configure the student data

c. School Admin - Can configure the allocation of groups and sub-groups (classes & subjects) to a set of users (teachers) - timetable

d. School Admin - Can configure the creation & allocation of new groups 

e. State Admin - Can configure the frequency at which attendance is to be taken (twice a day, once a day, weekly, monthly, in case of subject - once per subject)

f. State Admin - Can configure the time period for which attendance is to be enabled (holiday calendar)

g. School Admin (w State Admin approval) - Can configure the time period for which attendance is to be enabled (holiday calendar)

h. State Admin - Can configure the level at which the attendance is to be taken for an entity (class or subject level for students, camp level for remedial lessons)

i. School Admin - Can configure the order in which the entities should appear on the attendance screen (According to roll number , Alphabetically)

j. State Admin - Can configure the types of statuses that can be updated while marking attendance

k. School Admin - Can configure the entity details that are visible on the attendance screen

l. State Admin - Can configure the default period for which past attendance is visible on the main attendance screen

m. State Admin - Can configure the maximum period for which past attendance is visible and can be scrolled from the main attendance screen

n. State Admin - Can configure the submission cutoff time at which all attendance entries for a particular time period are submitted

