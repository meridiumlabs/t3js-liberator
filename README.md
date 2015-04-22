# t3js-liberator
A jQuery depencency liberator for [t3js](https://github.com/box/t3js).

Overrides `window.$` with hooks for `.on` and `.off`.

## Why does this exist?
**t3js** has a jQuery dependency due to obligated support for IE8 and event handling. The core library uses it primarily as browser-normalizing as described here: ['Why is there a dependency on jQuery?'](https://github.com/box/t3js#why-is-there-a-dependency-on-jquery). 
The support for IE8 is planned to stop in late December 2015 as [Box officially has end-of-lifed it](https://github.com/box/t3js#why-support-ie8).

In a current project, we're not obliged to officially support IE8, and did not want to bloat our resource includes with a library used only as a small dependency for another library.

## License

The MIT License (MIT)

Copyright (c) 2015 Meridium

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
