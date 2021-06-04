const left = document.querySelector(".left"),
    right = document.querySelector(".right"),
    bar = document.querySelector(".bar"),
    editor = document.querySelector(".editor"),
    run = document.querySelector(".btn-run"),
    iframe = document.querySelector(".iframe"),
    darkmode = document.querySelector(".btn-dark"),
    lightmode = document.querySelector(".btn-light");


//! Run btn code 

run.addEventListener("click", () => 
{
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8,"+ encodeURI(html);

}); //? Run btn code  End


//!dark Mode

    darkmode.addEventListener("click", () =>
    {
        editor.style.backgroundColor = "#363836";
        editor.style.color = "#eee";
    });

//?dark Mode


//!light Mode


//?light Mode


//! Drag in middle 

const drag = (e) => 
{
    e.preventDefault();
    document.selection ? document.selection.empty() :
    window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.offsetWidth / 3)+ "px";
    editor.resize();
}

bar.addEventListener("mousedown", () =>
{
    document.addEventListener("mousemove", drag);
});

bar.addEventListener("mouseup", () =>
{
    document.removeEventListener("mousemove", drag);
});

//? Drag in middle End 