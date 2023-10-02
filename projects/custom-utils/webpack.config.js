/**
 * structure for webpack plugin.
 * 
 * - A named JavaScript function or a JavaScript class.
 * - Defines apply method in its prototype.
 * - Specifies an event hook to tap into.
 * - Manipulates webpack internal instance specific data.
 * - Invokes webpack provided callback after functionality is complete.
 * - Ref Link -https://webpack.js.org/contribute/writing-a-plugin/#creating-a-plugin
*/

// A JavaScript class.
class MyExampleWebpackPlugin {
    // Define `apply` as its prototype method which is supplied with compiler as its argument
    apply(compiler) {
      // Specify the event hook to attach to
      compiler.hooks.emit.tapAsync(
        'MyExampleWebpackPlugin',
        (compilation, callback) => {
          console.log('This is an example plugin!');
          console.log(
            'Here’s the `compilation` object which represents a single build of assets:',
            compilation
          );
  
          // Manipulate the build using the plugin API provided by webpack
          compilation.addModule(/* ... */);
  
          callback();
        }
      );
    }
  }