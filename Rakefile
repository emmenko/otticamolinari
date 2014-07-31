require 'date'
require 'tmpdir'

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
