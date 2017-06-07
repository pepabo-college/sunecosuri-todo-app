require 'rails_helper'

RSpec.describe Task, type: :model do
  describe '#content' do
    context '空白のとき' do
      let(:content){Task.new(content: '')}

      it 'validでないこと' do
        task = Task.new(content: '')
        task.valid?
        expect(task.errors[:content]).to be_present
      end
    end
  end
end
