Vagrant.configure("2") do |config|
  config.vm.box = "pyama/wdb-ruby-2.3"

  config.vm.define 'app01' do |app01|
    app01.vm.hostname = "app01.wdp4.com"
    # vmに設定するIPアドレスをしてい
    app01.vm.network "private_network", ip: "192.168.50.21"
    #NFSを利用しコンテンツを連携
    app01.vm.synced_folder "/Users/sunecosuri/.ghq/github.com/pepabo-college/sunecosuri-todo-app",
    "/var/www/todo",nfs: true
    #VMのスペックを指定
    app01.vm.provider :virtualbox do |vbox|
      vbox.customize ["modifyvm",:id, "--memory",512]
      vbox.customize ["modifyvm",:id, "--cpus",2]
    end
  end

  config.vm.define 'db01' do |db01|
    db01.vm.hostname = "db01.wdp4.com"
    # vmに設定するIPアドレスをしてい
    db01.vm.network "private_network", ip: "192.168.50.31"
    #VMのスペックを指定
    db01.vm.provider :virtualbox do |vbox|
      vbox.customize ["modifyvm",:id, "--memory",1024]
      vbox.customize ["modifyvm",:id, "--cpus",2]
    end
  end


  config.vm.define 'proxy01' do |proxy01|
    proxy01.vm.hostname = "proxy01.wdp4.com"
    # vmに設定するIPアドレスをしてい
    proxy01.vm.network "private_network", ip: "192.168.50.11"
    #VMのスペックを指定
    proxy01.vm.provider :virtualbox do |vbox|
      vbox.customize ["modifyvm",:id, "--memory",256]
      vbox.customize ["modifyvm",:id, "--cpus",1]
    end
  end


  config.vm.define 'proxy02' do |proxy02|
    proxy02.vm.hostname = "proxy02.wdp4.com"
    # vmに設定するIPアドレスをしてい
    proxy02.vm.network "private_network", ip: "192.168.50.21"
    #VMのスペックを指定
    proxy02.vm.provider :virtualbox do |vbox|
      vbox.customize ["modifyvm",:id, "--memory",256]
      vbox.customize ["modifyvm",:id, "--cpus",1]
    end
  end
end
