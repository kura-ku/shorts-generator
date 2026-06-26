function log(title, message) {
  console.log(`[${title}] ${message}`);
}

function success(title) {
  console.log(`✅ ${title}`);
}

function error(title) {
  console.error(`❌ ${title}`);
}

module.exports = {
  log,
  success,
  error,
};