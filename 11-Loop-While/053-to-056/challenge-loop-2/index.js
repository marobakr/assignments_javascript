let myAdmins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Samera'];
let myEmployes = [
  'Amgad',
  'Samah',
  'Ameer',
  'Omar',
  'Othman',
  'Amany',
  'Samia',
];
let count = 0;

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === 'Stop') break;
  count++;
}
document.write(`<div> <strong> We Have ${count} Admin </strong> </div> <hr>`);

for (i = 0; i < count; i++) {
  if (myAdmins[i] === 'Stop') break;
  document.write(
    `<div> the admin for ${i + 1} is <strong>${myAdmins[i]}</strong>
    <h3 style= text-transform:capitalize > team members : </h3>
    `
  );
  all_Admins_and_Employes = [];

  for (j = 0; j < myEmployes.length; j++) {
    if (myAdmins[i][0] === myEmployes[j][0]) {
      all_Admins_and_Employes.push(myEmployes[j]);
      console.log(all_Admins_and_Employes);
    }
  }
  for (M = 0; M < all_Admins_and_Employes.length; M++) {
    document.write(`<p> -${M + 1} ${all_Admins_and_Employes[M]}</p>`);
  }
  document.write('<hr>');
  document.write('</div>');
}
