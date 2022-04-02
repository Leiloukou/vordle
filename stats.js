const wonP = document.querySelector('[data-won]')
const lostP = document.querySelector('[data-lost]')

lostP.textContent = `How many games you have lost: ${JSON.parse(
	localStorage.getItem('wrong')
)}`;
wonP.textContent = `How many games you have won: ${JSON.parse(
	localStorage.getItem('right')
)}`;