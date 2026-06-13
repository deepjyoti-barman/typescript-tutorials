// Example to assign values of and enum type from a function

// NOTE: All the non-initializer enum members must come before the initializer enum member
// If you try to define an enum member with an initializer before the non-initializer members, TypeScript will throw an error
enum Browser {
  Firefox,
  Safari,
  Edge = getVersion('edge'),
  Chrome = getVersion('chrome'),
  // Opera,        // Error - enum member must have an initializer
}

function getVersion(browserName: string): number {
  if (browserName == 'chrome') return 115;
  else if (browserName == 'firefox') return 97;
  else if (browserName == 'safari') return 16;
  else if (browserName == 'edge') return 118;
  else if (browserName == 'opera') return 94;
  else return -1;
}

console.log(Browser.Chrome); // 115
