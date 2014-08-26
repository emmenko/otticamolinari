require 'date'
require 'tmpdir'

task :default => [:server]

desc "Starts a local server"
task :server => [:build] do
  sh "jekyll serve --watch"
end
