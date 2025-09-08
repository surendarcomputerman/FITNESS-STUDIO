
function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function calculateMembership() {
  const days = parseInt(document.getElementById("classes").value);
  const personal = document.getElementById("personal").checked;

  if (isNaN(days) || days < 0) {
    document.getElementById("membershipResult").innerHTML = " Please enter valid number of days.";
    return;
  }

  
  const pricePerDay = 100;   
  const trainerFee = 1000;   

  
  let monthlyCost = days * pricePerDay;

  
  if (personal) {
    monthlyCost += trainerFee;
  }

  document.getElementById("membershipResult").innerHTML = `
    <b>Membership Summary</b><br>
    Days this month: ${days}<br>
    Personal Trainer: ${personal ? "Yes (+₹1000)" : "No"}<br>
    <b>Total Monthly Cost: ₹${monthlyCost}</b>
  `;
}

