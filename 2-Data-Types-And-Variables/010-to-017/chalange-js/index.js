let my_Tilte = 'elzero',
	my_Description = 'elzero web school',
	my_Date = '25/10';

my_Card = `
    <div class="card">
     <h3>hello ${my_Tilte}</h3>
     <p>${my_Description}</p>
     <span>${my_Date}</span>
    </div `;
document.write(my_Card.repeat(4));
document.querySelector('div').style = [`text-transform:capitalize;`];
