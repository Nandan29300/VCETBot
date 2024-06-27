const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const userText = userInput.value;
  if (userText.trim() !== '') {
    displayUserMessage(userText);
    respondToUser(userText);
    userInput.value = '';
  }
}

function displayUserMessage(message) {
  const userBubble = `<div class="user-bubble">${message}</div>`;
  chatBox.innerHTML += userBubble;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function displayBotMessage(message) {
  const botBubble = `<div class="bot-bubble">${message}</div>`;
  chatBox.innerHTML += botBubble;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respondToUser(message) {
  let botResponse = '';

  const lowerCaseMessage = message.toLowerCase();

  const greetings = ['hello', 'hi', 'hey'];
  const collegeKeywords = ['where is vcet located', 'about vcet'];
  const courseKeywords = ['ug courses', 'courses available for ug', 'courses'];
  const coursesKeywords = ['pg courses', 'courses available for pg'];
  const collegeInfoKeywords = ['college information', 'information about the college'];
  const timingsKeywords = ['timings', 'opening time', 'college hours'];
  const contactKeywords = ['contact number', 'phone number'];
  const examsKeywords = ['exams', 'entrance exams preferred', 'entrance exams accepted in vcet'];
  const facilitiesKeywords = ['facilities', 'college facility'];
  const hostelKeywords = ['hostel facilities', 'hostel'];
  const uniformKeywords = ['dress code', 'college uniform', 'college attire'];
  const placementKeywords = ['placements', 'college recruitments', 'companies visiting', 'top companies'];
  const admissionKeywords = ['admission procedure', 'documents required during admission', 'admission'];
  const seatAllocationKeywords = ['seat allocation', 'seats distribution'];
  const helpKeywords = ['help', 'how can you help', 'what can you do'];

  if (greetings.some(greet => lowerCaseMessage.includes(greet))) {
    botResponse = 'Hello! How can I help you?';
  } else if (collegeKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = 'VCET- Vivekananda College of Engineering & Technology, PUTTUR, DAKSHINA KANNADA';
  } else if (courseKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = ['CSE', 'ECE', 'MECH', 'Civil', 'CD', 'AIML'].join(', ');
  } else if (coursesKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = ['MBA', 'MCA'].join(', ');
  } else if (collegeInfoKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = 'One of the reputed engineering colleges in the coastal region of Karnataka, established in 2001.';
  } else if (timingsKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = ['Mon - Fri:  09:00 AM to 4:30 PM.', 'Saturday:  09:00 AM to 1:30 PM'].join('<br>');
  } else if (contactKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = "+91 8251235955";
  } else if (examsKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = ['KCET', 'COMED-K', 'UGET'].join(', ');
  } else if (facilitiesKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = ['separate hostel for boys and girls', 'WiFi enabled campus', 'college canteen', 'Gym', 'Reading room', 'Library', 'Digital library'].join('<br>');
  } else if (hostelKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = 'Separate hostel for boys and girls.';
  } else if (uniformKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = 'Except Saturdays all days uniform.';
  } else if (placementKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = ['HP', 'Infosys', 'TCS', 'Wipro', 'Accenture', 'SAP', 'Capgemini', 'Global Delight', 'Cadence', 'Signdesk', '99Games', 'SLK Software'].join(', ');
  } else if (admissionKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = 'Documents required during admission: 10th mark sheet, 12th mark sheet, transfer certificate, migration certificate, conduct certificate, passport size photo, cast and income certificate, study certificate, account details.';
  } else if (seatAllocationKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = 'Seat distribution: 45% for CET, 30% for COMEDK, 25% for management quota.';
  } else if (helpKeywords.some(keyword => lowerCaseMessage === keyword)) {
    botResponse = 'You can ask me about the college location, courses offered, timings, contact details, exams accepted, facilities available, hostel facilities, uniform policies, placement opportunities, admission procedure, and seat allocation.';
  } else {
    botResponse = "I'm sorry, I don't understand. Could you please ask something else?";
  }

  displayBotMessage(botResponse);
}
