# Door Buster!

| Group 8              |                 |
|----------------------|-----------------|
| Aleksi Ala-Harja     | aleksiah@kth.se |
| Federico Baldassarre | fedbal@kth.se   |
| Yinan Xu             | yinanx@kth.se   |
| Ela Yudhanira        | elayu@kth.se    |

## Problem
In a world where applying for a job is as easy as sending an email, keeping track of the status of your applications has become complex and time consuming. So many versions of your curriculum spread over your USB drive, your Desktop and a cloud account, not to mention the cover letters!

## Solution
We propose a single integrated platform to keep track of every step of your application: from dreaming the job to your first day on it. The service will allow the user to manage the status of his applications, together with all the attached documents, deadlines, meetings, messages and emails. It will also help the user selecting the right set of skills to introduce himself to a new company, based on similar applications he’s done in the past.

## Target
Every person in need of a systematized solution to track his application, from students looking for summer jobs to seasoned professionals chasing their next CEO position.

## Technologies

Frontend (web application):
* Angular

Backend (auth and storage):
* Firebase

External APIs:
* GlassDoor
* Some email/reminder service
* Some other cool stuff we can add randomly

## Draft of the steps of an application

1. Pre-application:
   1. Name of the company and basic informations (headquarters, number of employees, founded, contacts)
   2. Position (position, where you found it, when you found it, how to apply, requirements)
   3. Kind of job (period, contract type)
   4. Deadlines (applications open, application closes)
   5. Reminders (apply before/after)
   6. Documents: link to the job listing, photo of the advertise etc.
   7. CV/CL drafts
2. Application step:
   1. Upload a CV + Cover Letter (specific for that company, help deciding the skills to highlight, maybe some typo checking)
   2. Reminders (when to expect a follow up)
3. Ongoing (the largest and more generic step):
   1. Track each step of the interviewing process based on:
   2. What (Skype/phone/in person/on site)
   3. Who (interviewers you interacted with)
   4. When (incoming/completed + optional reminders)
4. Final Step:
   1. Rejected: keep it for reference/remove it
   2. Got an offer: how much, starting when, type of contract, who you spoke with
   3. Accepted: celebrate
   
## Test it yourself
1. Clone the repo
   ```git clone https://github.com/baldassarreFe/door-buster```
2. Npm install everything
   ```npm install```
3. Build and serve on localhost:4200
   ```ng serve```
   
## Deploy on GitHub pages
Using [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages):
```bash
ng build --prod --base-href "https://USERNAME.github.io/REPOSITORY/"
ngh --no-silent --message "Deploy to gh-pages"
```
   

