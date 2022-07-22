// Terminal Text

// set up text to print, each item in array is new line
const aText = ['Location', 'Email', 'LinkedIn', 'GitHub', 'Download My Resume'];
let iIndex = 0; // text array index

const destination = document.getElementById('terminal'); // destination to print button info text
destination.innerHTML = ' '; 

const contactBtn = [document.getElementById('openModal'), document.getElementById('em'), document.getElementById('li'), document.getElementById('gh'), document.getElementById('rsm')];

contactBtn.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        iIndex = contactBtn.indexOf(btn);
        destination.innerHTML = aText[iIndex];
    });
    btn.addEventListener('mouseout', () => {
        iIndex = 0;
        destination.innerHTML = '';
    });
});

// Scroll to Top Button Code

//Get the button:
let topButton = document.getElementById('top');

if(topButton) {
    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById('top').style = 'display: block';
        } else {
            document.getElementById('top').style = 'display: none';
        }
    }
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = scrollFunction;
    
    // When the user clicks on the button, scroll to the top of the document
    const topButtonClicked = () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    
    topButton.addEventListener('click', topButtonClicked);
}

// Location Modal Code

// Get the modal
const modal = document.getElementById('locationModal');

// Get the button that opens the modal
const modalbtn = document.getElementById('openModal');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
modalbtn.onclick = () => {
    modal.style.display = 'block';
};

    // When the user clicks on <span> (x), close the modal
span.onclick = () => {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};