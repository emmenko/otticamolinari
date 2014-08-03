require 'date'
require 'tmpdir'

task :default => [:server]

task :build do
  mkdir_p "assets/vendor/bootstrap"
  mkdir_p "assets/vendor/font-awesome"
  mkdir_p "assets/vendor/jquery"
  cp_r "bower_components/bootstrap/dist/.", "assets/vendor/bootstrap"
  cp_r "bower_components/font-awesome/css/.", "assets/vendor/font-awesome/css"
  cp_r "bower_components/font-awesome/fonts/.", "assets/vendor/font-awesome/fonts"
  cp_r "bower_components/jquery/dist/.", "assets/vendor/jquery"
  cp_r "bower_components/jquery.easing/js/.", "assets/vendor/jquery"
end

desc "Starts a local server"
task :server => [:build] do
  sh "jekyll serve --watch"
end

desc "Generate and publish website to `gh-pages`"
task :publish => [:build] do
  Dir.mktmpdir do |tmp|
    pwd = Dir.pwd
    sh "git clone -b gh-pages --single-branch git@github.com:emmenko/otticamolinari.git #{tmp}"
    cp_r "_site/.", tmp
    Dir.chdir tmp
    sh "git add -A"
    sh "git commit -m 'Website generated at #{Time.now.utc}'"
    sh "git push -f origin gh-pages"
    Dir.chdir pwd
  end
end
