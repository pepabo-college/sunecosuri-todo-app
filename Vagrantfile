Vagrant.configure("2") do |config|
  config.vm.box = "pyama/wdb-ruby-2.3"

  config.vm.define :proxy_1 do |c|
    c.vm.hostname = "proxy-1.wdp4.com"
    # vmに設定するIPアドレスをしてい
    c.vm.network "private_network", ip: "192.168.80.10"
    #NFSを利用しコンテンツを連携
    c.vm.synced_folder "/Users/sunecosuri/.ghq/github.com/pepabo-college/sunecosuri-todo-app",
    "/var/www/todo",nfs: true
    #VMのスペックを指定
    c.vm.provider :virtualbox do |vbox|
      vbox.customize ["modifyvm",:id, "--memory",512]
      vbox.customize ["modifyvm",:id, "--cpus",1]
    end
  end
end
