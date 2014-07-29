require 'date'
require 'tmpdir'

task :default => [:server]

desc "Starts the jekyll server and watch for changes"
task :server do
  pids = [
    spawn("bundle exec jekyll serve --watch"),
    spawn("scss --watch _assets/scss:assets/css"),
    spawn("coffee -b -w -o assets/js -j m.js -c _assets/coffee/*.coffee")
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end

task :clean do
  rm_rf "_site"
end

desc "Generate and build website"
task :build => [:clean] do
  sh "scss --update _assets/scss:assets/css"
  sh "coffee -b -o assets/js -j m.js -c _assets/coffee/*.coffee"
  sh "jekyll build"
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
