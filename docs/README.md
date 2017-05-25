# jeonssa-HCI
Target: Restaurant customers during busy hours in the Gangnam area

Goal: Redesign how potential customers wait for full restaurants in the Gangnam area


We have two Javascript file that manages customers' waiting list. 

In the index-jquery.js, we handle the total waiting list.

In this version of the prototype, when a customer inputs their phone number for getting in line,
We assign each customers with a key code, and store that information in the local storage.

In the wait.js, we handle each customer's waiting information.

In this version of the prototype, we manually reduce the waiting list thorugh javascript setInterval method.
When a customer tries to cancel the reservation, they input last four digits of their phone number.
wait.js then compares that value with phonenumber stored in localStorage. 

This prototype assumes that both index.html and user.html is used in the same device.
