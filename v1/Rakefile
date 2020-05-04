require 'date'
require 'tmpdir'

task :default => [:server]

desc 'Starts a local server'
task :server do
  sh 'bundle exec jekyll serve --watch'
end

desc 'Site packaging and deploying'
task :shipit do
  sh 'bundle exec jekyll build'
  sh 'bundle exec travis-custom-deploy sftp service:jekyll'
end