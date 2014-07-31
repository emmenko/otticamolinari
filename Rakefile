require 'date'
require 'tmpdir'

task :default => [:server]

task :build do
  sh "mkdir -p ./assets/vendor/bootstrap"
  sh "cp -R ./bower_components/bootstrap/dist/* ./assets/vendor/bootstrap"
  sh "mkdir -p ./assets/vendor/jquery"
  sh "cp ./bower_components/jquery/dist/* ./assets/vendor/jquery"
  sh "cp ./bower_components/jquery.easing/js/* ./assets/vendor/jquery"
end

desc "Starts a local server"
task :server => [:build] do
  sh "jekyll serve --watch"
end

desc "Generate and publish website to `master`"
task :publish => [:build] do
  Dir.mktmpdir do |tmp|
    pwd = Dir.pwd
    sh "git clone -b master --single-branch git@github.com:emmenko/otticamolinari.git #{tmp}"
    cp_r "_site/.", tmp
    Dir.chdir tmp
    sh "git add -A"
    sh "git commit -m 'Website generated at #{Time.now.utc}'"
    sh "git push -f origin master"
    Dir.chdir pwd
  end
end
