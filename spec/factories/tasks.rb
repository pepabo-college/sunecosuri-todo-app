FactoryGirl.define do
  factory :task do
    sequence(:content){|i| "内容本文#{i}"}
    status [*0..2].sample
  end
end
