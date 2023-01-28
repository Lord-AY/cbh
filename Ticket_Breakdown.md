# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
The User story is for facilities to created their own custom ids for Agents they work with
At the end of this user story the facilities should be able to generate reports that contains custom Ids for their Agents

# Tickets
1. Modify the Agents table to have an extra column to store the custom Ids
    ## Acceptance Criteria
    -> Database should be able to store custom Ids for Agents
    -> Custom IDs should be unique for each Agent
    ## Time Estimates
    -> 2 points

2. Create a method or function (createAgentId) that is going to create custom Ids for Agents
    ## Acceptance Criteria
    -> Facilities should be able to create custom Ids for Agents
    ## Time Estimates
    -> 1 points

3. Modify the generateReport function to return reports containing the custom Ids created for Agents
    ## Acceptance Criteria
    -> Faclities should be able to generate reports that shows the custom Id for the agent as opposed to the database internal id
    ## Time Estimates
    -> 3 points

4. Modify getShiftsByFacility function to return the custom Id as part of the Agents metadata
    ## Acceptance Criteria
    -> Agent Custom ID should be included in the metadata returned by the function
    ## Time Estimates
    -> 2 points

Note: Estimated time also included writing test cases for each ticket