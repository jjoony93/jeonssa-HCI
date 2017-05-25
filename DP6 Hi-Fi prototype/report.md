**CS374 Design Project 6: Hi-fi Prototyping**  
**Team JEONSSA**  
20111016 Min Kang  
20121059 SunJae Lee  
20121061 Joon Young Lee  
20121087 Sewon Hong

---

# Hi-fi Prototyping
 
---
## POV
    “A customer waiting for restaurant table needs to feel less fraustration
    because one out of two customers tends to leave tired of waiting.”
- User: A customer waiting for restaurant table. 
- Needs: Feel less fraustration. 
- Insights: One out of two customers tends to leave tired of waiting. 

We met several restaurant owners and potential customers who have experienced or have trouble with long waiting line at a busy restaurant. 
We were amazed that one out of two customers leave because of the long waiting, and that customers get very frustrated while waiting when they have to wait indefinitely in a very uncomfortable place. 
It would be game changing to reduce amount of time each customer has to wait, and to provide customers with estimated waiting time with possible resting place.

---
## Target Users

Anybody who has experienced waiting for a long time at a restaurant

---
## Tasks
1. Join the waiting list (make a reservation)
2. Leave the waiting list (cancel reservation)
3. Check current position in waiting list (how many people are left)

---
## Implementation Notes

### URL of Prototype: <a href="https://kmin93.github.io/jeonssa-HCI/" target="_blank">https://kmin93.github.io/jeonssa-HCI/</a>

### URL of Git repository: <a href="https://github.com/kmin93/jeonssa-HCI" target="_blank">https://github.com/kmin93/jeonssa-HCI</a>

### Libraries and frameworks: jQuery, Bootstrap

### Lessons from heuristic evaluation

| Feedback | Solution |
| --- | --- |
| No help section to address the site's functionality| Added a Help section to inform first-time users of the site's purpose and functionality|
| Invalid values could be entered in the information input section in main page| Filtered invalid values from information input sections (only numbers allowed), added input rules|
| Copy-pasting URL from popup linked to invalid page|Matched URLs to actual hyperlinks |
| Progress bar in `user.html` could be moved by user | Disabled the "remaining teams" progress bar from being able to be moved by users|
| When cancelling reservation, any random input would register as valid| Match reservation number on cancel, reject otherwise|
|"Call restaurant" button does not work | Implemented call function (in `user.html`)|
|"Cancel" icon doesn't match real world "cancel" icon | Removed "cancel" icon in reservation cancellation popup|

### Representative screenshots:


---
## Inidividual Reflections
---
## Studio Reflections

### FEEDBACK SUMMARY
1. 

### FEEDBACK REFLECTION
1. 
