CONTENTEDITABLE : The contenteditable attribute makes any HTML element editable directly in the browser — meaning the user can click on it and change its content, like a mini text editor. For example, <div contenteditable="true">Click and edit this text!</div>

SPELL CHECK : In HTML, the spellcheck attribute is used to enable or disable spelling and grammar checking in input fields or editable content. For e.g.     <!-- Spell check enabled -->
<textarea spellcheck="true">Ths is an exmple.</textarea>
<!-- Spell check disabled -->
<input type="text" spellcheck="false" value="Ths is an exmple.">

📚 Shorthand Syntax Reference: margin(a, b, c, d);
Number of values	Meaning
1 value 	All four sides (top, right, bottom, left)
2 values	Top & Bottom, Right & Left
3 values	Top, Right & Left, Bottom
4 values	Top, Right, Bottom, Left

The background property is a shorthand that can set multiple background-related properties at once:
 You can include:
background-color
background-image
background-repeat
background-position
background-size
background-attachment
background-origin
background-clip

The <datalist> tag is used to provide autocomplete suggestions for <input> fields. It works like a dropdown suggestion list, but you still allow free text input.
<label for="city">Enter City:</label>
<input list="cities" id="city" name="city" placeholder="Type a city..." />
<datalist id="cities">
  <option value="New York">
  <option value="London">
  <option value="Mumbai">
  <option value="Tokyo">
  <option value="Sydney">
</datalist>

