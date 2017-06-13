require 'rails_helper'

RSpec.describe "tasks/show", type: :view do
  context '存在しないIDでアクセスしようとしたとき' do
    visit '/tasks/show/99999'
    expect(rendered).to raise_error(ActiveRecord::RecordNotFound)
  end
end
