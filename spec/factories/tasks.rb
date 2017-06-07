FactoryGirl.define do
  factory :task do
    owner
    sequence(:content){|i| "内容本文#{i}"}
  end
end
