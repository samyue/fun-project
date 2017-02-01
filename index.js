var AsciiBanner = require('ascii-banner');

var text = 'Stephen Yue';

// simple banner
AsciiBanner
.write(text)
.out();


// color banner
AsciiBanner
.write(text)
.color('green')
.out();

AsciiBanner
.write('haha')
.color('red')
.font('thin')
.after('>v{{version}}', 'yellow')
.before('>[{{name}}]<')
.out();


