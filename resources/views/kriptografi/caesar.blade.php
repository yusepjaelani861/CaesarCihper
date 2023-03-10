<html>
    <head>
        <title>Caesar Cipher</title>
    </head>
    <body>
        <h1>Caesar Cipher</h1>
        <form action="/kriptografi/caesar" method="post">
            @csrf
            <label for="plain">Plain Text</label>
            <input type="text" name="plain" id="plain">
            <label for="key">Key</label>
            <input type="number" name="key" id="key">
            <button type="submit">Submit</button>
        </form>
        @if (isset($cipher))
            <p>Cipher Text: {{ $cipher }}</p>
        @endif
    </body>
</html>