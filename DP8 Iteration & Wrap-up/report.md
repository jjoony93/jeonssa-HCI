**Team JEONSSA**  
20111016 Min Kang  
20121059 SunJae Lee  
20121061 Joon Young Lee  
20121087 Sewon Hong
 
---
 
# DP 8: Iteration & Wrap-up

Final Report: The final report will be brief. You need to simply include the following:
- Iteration: How did you spend the DP8 period for iteration? Why? What changes did you make? Show concrete examples and data whenever applicable. What did you learn?

## Application URL
https://kmin93.github.io/jeonssa-HCI/index.html

## Youtube URL
https://youtu.be/-mL1qeTR5AU

## Iteration
During DP8 period, we put effort in improving our service by implementing the problmes that we identified from the DP7 Usability lessons. There were a total eleven DP7 Usability lessons, but we chose not to handle all the lessons because some of them were either too minor or too subjective (other users might not consider it as a problem). Instead, we decided to focus on usability lessons with high priority fix. The table below shows the list of usabliity lessons that we fixed.

|#|Issues|Theme|Level of Criticality|
|---|---|---|---|
|1|In the reservation page, the "See Menu" button does not work.|Consistency & standards|Major: high priority fix|
|2|Currently, the progress bar in the reservation page serves no purpose than to simulate functionality. It does not accurately reflect how many teams are actually waiting.|Consistency & standards|Major: high priority fix|
|3|On Android phones, the confirmation page for reservation cancellation is not mobile-friendly.|Consistency & standards|Major: high priority fix|
|4|It is hard to close the “Cancel Reservation” pop-up window - the X button to close is hard to see.|Visibility of system status|Major: high priority fix|
|5|The "What does this site do?" link is hard to see.|Aesthetic & minimalist design|Major: high priority fix|

Then we conducted two additional user testings in which we again identifed a few usability lessons. Some of them overlapped with the low priority DP7 Usability lessons such as "In the main page, keyboard input (on iPad) shows QWERTY keyboard, not numbers" and "Placeholders in the main page seems too verbose". Besides these, we identified one high priority usability lesson that wasn't in DP7, which is "help page x button disappears when moving position".

After implementing a series of iterations on user testing, we've learned that it is hard to develop a service that brings satisfaction to all users and that what we thought was good enough still had many usability problems to overcome.


## Individual Reflections

### Min Kang
### Sunjae Lee
#### What part of the UI Implementation did you contribute to?

In this project, I in implementing UI, mainly contributed to designing user's waiting information page. 
I contributed to 
* how progress bar should interact with current customer's waiting information. 
* Printing "Loading..." text when the page is Loading
* Designed Cancel Reservation Modal including font size, modal size, color, icon, etc.


In regards to implementing and coding, I mainly focussed on functional requirements of the application. 
However, I contributed to UI mainly by comming up with idea on how to display those functional requirements. 
Some of the idea that I came up with are:


* Using progress bar to display on-line waiting line in a form of physical line
* Using some sort of icon at the end of the line to show in which way the line is shrinking

The main point of our UI was to make it as simple as possible so that any user can easily use our application. To achieve this, we focused on putting only necessary elements and putting all elements in a single page so that users dont have to dig around the website. Therefore, we had many modifications in UI throughout the development. We abandoned over three prototypes. Some of the UI that we abandoned that I designed are "Be Ready" pop-up, "Warning" pop-up, and "No-show" pop-up. Our final prototype is chosen from many prototypes that we have built, and every single UI elements in our application is work of collaborative work regardless of who coded or who came up with it.

#### What worked well in your team? 

Something that worked well in our team was gathering and distributing work. Since all of our team mates live close together, we had no hard time gathering up, and since we were all friends, and knew each other well, we did not have to worry about team mates running away or slacking off. When someone did less work than others for one week because of busy schedule, they voluntarily did more work for the next week. We distributed work very flexibly, but was very fair overall. 


#### What worked not well in your team?


Something that was hard in our team was making decisions. In building an application, we had to make many decisions from choosing HMW questions, specifying functional and non-functional requirements, choosing UI design, and so on. Since our UI is very compact, and limited in size, we had hard time compress all of the functional requirements and user needs in a single small window. Therefore, we had to make very good decisions each time.

#### How did you overcome any hurdle in teamwork?

We overcame this issue by whenever someone has a new idea, instead of discussing whether we should use that idea or not, we first applied to our prototype, and then discussed whether the new prototype with the new idea is better than the previous one. By doing so, it was much easier to make decisions since we could see it visually. 

#### What lesson about teamwork did you learn that you might apply to your next team project?

Through this project, I learned that discussion and brainstorming all together as a team is very useful, and is much better than one person deciding and others following. In most of the team project in Korea, there always is a boss or "조장" who leads the project. In most of the team projects I have done, "조장" decided most of the part, and other team mates followed. I thought such method is effective in that we can save time discussing "what to do." However, in this project, all four of the team mates collaboratively decided what to do and even how to do. Even though it took some time, in deciding what to do, we were able to come up with novel idea that individual could not have come up with. Furthermore, by discussing "how to do" and finding most effective way to do the work, we were able to reduce time implementing the idea. Time we spent on discussing "what to do" was compensated by time we reduced by discussing "how to do." Learned that collaborative work has no down side, I would definitely encourage collaborative work for my next team project.

#### Throughout the team-based design project experience, what did you learn about the user-centered design process and web-based GUI implementation?

In this team-based design project, I learned that brilliant UI designs do not just come up from a single brilliant idea. It is through rigorous design process that requires many collaborative work, and many refinements and hard works. Also, I learned that what is more important than coding and building an application is user testing. In this project, many refinements were from user test feedbacks. Building a use-case diagram and imagining myself as a user is simply not enough to fully meet each user's needs. 

In using web-based GUI implementation, I learned that web-based GUI has developed very much, and is very useful. I always thought that I am very far away from designing an GUI since I do not have much aesthetic sensibility. However, with external APIs such as bootstrap, I was able to come up with decent design without much having to concerned about the aesthetic aspects. Also, I first thougt that  building a GUI with html would be much harder than building in a native app, but it was much easier than I thought.
### Joon Young Lee
####  What part of the UI implementation did you contribute to?
'index.html' page (and corresponding CSS file):
* x buttons that clear input in main page
* The input field to show placeholder again when cleared by x button; because people may forget what information they needed to fill in each input field because they look identical.
* Input parsing in main page; when typing phone number, '-' is automatically added in right place
* Red warning text showing next to input field in main page when an unacceptable input is submitted. For example if the phone number is left empty or its number of digits is not equal to 11, different warnings that are appropriate to conditions are shown.  
* Red warning text disappering when the according input field is on focus
* Using bootstrap-modal window to make the entire Reservation information pop-up

'user.html' page
* Make the user unable to move the position of slider
* 굽네치킨 추천메뉴 section
* entire modal window pop-up when clicking "See Menu" button
#### What worked well and not in your team? How did you overcome any hurdle in teamwork? What lesson about teamwork did you learn that you might apply to your next team project?
- We as a team had a few difficulties. Firsly, all four memembes of the team had different design tastes, so we had a hard time agreeing on desing choices. We overcame this by voting and selecting the most popular design choice. In some cases a certain member had to sacrifice his design choice, and in other cases other memebers had to sacrifce. However, after deciding a design choice, we worked well as a team and developed based on that choice.  Secondly, we all had different coding capabilities/skills. One member was in his first semester as a CS department student, and others were in between their 4th and 6th semester. However, we did not discourage the relatively less experienced student but rather distribute work equally so each member could participate actively.

- From this team project, I've learned that it is important to recognize the fact that each team member has different levels of skill sets and that although members have differnt capabilities, work should be distributed as evenly as possible to make sure that every member is contributing so that there is little conflict or complaints among members. A team project requires many meetings among members, but if there are conflicts within the team the work efficiency will degrade.
#### Throughout the team-based design project experience, what did you learn about the user-centered design process and web-based GUI implementation?
- The most memorable lesson is "always blame the system, never blame the user". If a user confronts a problem, I've learned to think from the point of view of user. Features taken into consideration include learnability, efficiency, affordability, consistency, color&typography, layout, accessiblity, and so on. Moreover, I've learned that paper prototyipng is a very cheap and useful method to test users before coding heavily. If we find a problem after heavily coding, since we've already put lots of time we will be reluctant to discard what we've done even if we've found usabliity problems in user testing. Paper prototyping makes it possible to avoid those risks. Moreover, a series of user testing iterations are required to update usability issues and thus help bring our product to a higher level.
### Sewon Hong
- Individual reflection: Each member should write this part on their own, reflecting on their personal experience. Merge all members' mini-reports in the final report. Please answer the following questions:
    - What part of the UI implementation did you contribute to?
    - What worked well and not in your team? How did you overcome any hurdle in teamwork? What lesson about teamwork did you learn that you might apply to your next team project?
    - Throughout the team-based design project experience, what did you learn about the user-centered design process and web-based GUI implementation?


