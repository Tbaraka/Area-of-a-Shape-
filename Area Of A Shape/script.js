function selectShape() {
    const shape = document.getElementById('shape').value;
    const inputFields = document.getElementById('input-fields');
    const lengthDiv = document.getElementById('length-div');
    const widthDiv = document.getElementById('width-div');
    const heightDiv = document.getElementById('height-div');
  
    if (shape === 'triangle') {
      lengthDiv.style.display = 'block';
      widthDiv.style.display = 'none';
      heightDiv.style.display = 'block';
    } else if (shape === 'circle') {
      lengthDiv.style.display = 'block';
      widthDiv.style.display = 'none';
      heightDiv.style.display = 'none';
    } else if (shape === 'rectangle') {
      lengthDiv.style.display = 'block';
      widthDiv.style.display = 'block';
      heightDiv.style.display = 'none';
    } else if (shape === 'square') {
      lengthDiv.style.display = 'block';
      widthDiv.style.display = 'none';
      heightDiv.style.display = 'none';
    } else if (shape === 'parallelogram') {
      lengthDiv.style.display = 'block';
      widthDiv.style.display = 'block';
      heightDiv.style.display = 'block';
    }
  }
  
  function calculateArea() {
    const shape = document.getElementById('shape').value;
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    let area;
  
    if (shape === 'triangle') {
      area = (length * height) / 2;
    } else if (shape === 'circle') {
      area = Math.PI * length * length;
    } else if (shape === 'rectangle') {
      area = length * width;
    } else if (shape === 'square') {
      area = length * length;
    } else if (shape === 'parallelogram') {
      area = length * height;
    }
  
    document.getElementById('result').textContent = 'The area is ' + area + '.';
  }