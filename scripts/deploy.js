const exec = require('child_process').exec;

const cmd = `aws s3 cp ./public/ s3://${process.env.S3_BUCKET_NAME}/ --recursive`;
const cloudfrontCmd = `aws cloudfront create-invalidation --distribution-id ${process.env.CF_DISTRIBUTION_ID} --paths '/*'`;
console.log(`Running command: ${cmd}`);
exec(cmd, (err, stdout, stderr) => {
  // command output is in stdout
  if (err) {
    return console.log('FATAL > ', err);
  }
  console.log(`OUT > ${stdout}`);
  console.log(`ERR > ${stderr}`);
  exec(cloudfrontCmd, (err2, stdout2, stderr2) => {
    if (err2) {
      return console.log('FATAL > ', err2);
    }

    console.log(`OUT > ${stdout2}`);
    return console.log(`ERR > ${stderr2}`);
  });
});
