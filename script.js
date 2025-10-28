
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('a.nav-link').forEach(a=>{
    if(a.getAttribute('href')===location.pathname.split('/').pop() || (location.pathname.endsWith('') && a.getAttribute('href')==='index.html')){
      a.style.color = getComputedStyle(document.documentElement).getPropertyValue('--accent');
    }
  });
});

function handleContact(e){
  e.preventDefault();
  const name=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  const company=document.getElementById('company').value;
  const msg=document.getElementById('message').value;
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${msg}`);
  window.location.href = `mailto:Shridhar.scvsolutions@gmail.com?subject=${encodeURIComponent('Website contact from '+name)}&body=${body}`;
}
