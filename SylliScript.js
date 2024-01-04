<script type="text/javascript" src="jquery-3.3.1.js"></script>
    /*
    change const site = 'pagedart.com'; 
    to your website: 
    const site = 'example.com';.
    */
    const f = document.getElementById('form');
    const q = document.getElementById('query');
    const google = 'https://www.google.com/search?q=site%3A+';
    const site = 'pagedart.com';
//control for the form to submit files
f.addEventListener('submit', submitted);
    function submitted(event){
        event.preventDefault();
        /* watch out for q.value, may need to change it */
        const url = google + site + '+' + q.value;
        const win = window.open(url, '_blank');
        win.focus();
    }
/*
where are we: 
trying to get the damn search to work, 
after need to create a database in which the syllabus
files will be searchable and retrieavable.
*/
