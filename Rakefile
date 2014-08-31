require 'date'
require 'tmpdir'
require 'html/proofer'

task :default => [:server]

desc 'Starts a local server'
task :server do
  sh 'bundle exec jekyll serve --watch'
end

desc 'Check HTML files'
task :lint do
  sh 'bundle exec jekyll build'
  HTML::Proofer.new('./_site').run
end

desc 'Site packaging and deploying'
task :shipit => [:lint] do
  sh 'bundle exec jekyll build --config _config.yml,_config.prod.yml'
  sh 'bundle exec travis-custom-deploy sftp service:jekyll'
end