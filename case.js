const subject="Bangla";
const book="bangLa     ";

if(subject==book)
{

    console.log('Poira fatai felbo')
}
else{
    console.log('hudai prista ultai')
}

// use case
console.log('After using case')

if(subject.toLocaleLowerCase()==book.toLocaleLowerCase())
{

    console.log('Poira fatai felbo')
}
else{
    console.log('hudai prista ultai')
}


// remove first and last space using trim keyword
console.log('After remove  space')

if(subject.toLocaleLowerCase().trim()==book.toLocaleLowerCase().trim())
{

    console.log('Poira fatai felbo')
}
else{
    console.log('hudai prista ultai')
}
