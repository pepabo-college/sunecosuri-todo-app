require 'rails_helper'

RSpec.describe "tasks/show", type: :view do
  context '存在しないIDでアクセスしようとしたとき' do
    render
    expect(rendered).to raise_error(ActiveRecord::RecordNotFound)
  end
end
